import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { PostProps } from "../interfaces/IPostProps";

import styles from "./style/Post.module.css";

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentWithoutDeletedOne);
  }

  const handleNewCommentInvalid = (e: InvalidEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={(e) => handleCreateNewComment(e)}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
};

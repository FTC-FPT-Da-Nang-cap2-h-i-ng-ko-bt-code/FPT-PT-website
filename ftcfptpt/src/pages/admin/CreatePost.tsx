import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase";

function CreatePost() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);

  const createPost = async () => {

    if (!title.trim()) {
      alert("Vui lòng nhập tiêu đề.");
      return;
    }

    setSaving(true);

    try {

      await addDoc(collection(db, "posts"), {
        title: title.trim(),
        description: description.trim(),
        content,
        published,

        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      alert(
        published
          ? "Đã đăng bài!"
          : "Đã lưu bản nháp!"
      );

      window.location.href = "/admin";

    } catch (error) {

      console.error(error);

      alert(
        "Không thể lưu bài viết."
      );

    }

    setSaving(false);
  };

  return (
    <div className="post-editor">

      <div className="post-editor-header">

        <div>

          <p className="section-label">
            FPT PT ROBOTICS · CONTENT
          </p>

          <h1>
            CREATE
            <br />
            <span>POST.</span>
          </h1>

        </div>

        <a href="/admin">
          ← DASHBOARD
        </a>

      </div>


      <div className="post-form">

        <label>
          TITLE
        </label>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Enter post title..."
        />


        <label>
          DESCRIPTION
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Short description..."
          rows={4}
        />


        <label>
          CONTENT
        </label>

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          placeholder="Write your article..."
          rows={18}
        />


        <label className="publish-toggle">

          <input
            type="checkbox"
            checked={published}
            onChange={(e) =>
              setPublished(e.target.checked)
            }
          />

          <span>
            PUBLISH IMMEDIATELY
          </span>

        </label>


        <div className="post-form-actions">

          <button
            onClick={createPost}
            disabled={saving}
          >
            {saving
              ? "SAVING..."
              : published
                ? "PUBLISH POST →"
                : "SAVE DRAFT →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreatePost;
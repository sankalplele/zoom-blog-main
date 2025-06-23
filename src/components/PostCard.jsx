import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  console.log(featuredImage);
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : null;
  console.log(imageUrl);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-blue-50 dark:bg-slate-800 rounded-xl p-4 dark:hover:bg-slate-700 hover:bg-slate-200">
        <div className="w-full justify-center mb-4 aspect-square">
          <div
            title={title}
            className="bg-cover bg-center rounded-xl w-full h-full "
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>
        </div>
        <h2 className="text-xl font-bold truncate">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;

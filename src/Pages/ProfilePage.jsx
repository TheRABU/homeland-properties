import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  const handleSaveChanges = async () => {
    try {
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-800">Update Profile</h2>
      </div>
      <div className="flex flex-col mx-auto justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <img
          src={photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <form className="py-10" onSubmit={handleSaveChanges}>
          <div className="mb-3">
            <label>Name:</label>
            <input
              type="text"
              value={displayName}
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Photo URL:</label>
            <input
              type="text"
              value={photoURL}
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-full" type="submit">
            Save Changes
          </button>
        </form>
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{displayName}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

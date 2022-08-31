import Rating from "../Rating";

const Comment = ({ profileImage, text }: any) => {
  return (
    <div className="flex items-center flex-col bg-white py-8 px-5 rounded-lg">
      <div>
        <img src={profileImage} alt="" className="w-16 h-16 rounded-full" />
      </div>
      <p className="text-sm font-medium text-gray-500 text-center my-4">
        {text}
      </p>
      <Rating rating={4.5} styleStar="w-4 h-4" />
      <h5 className="my-2.5">Carolyn Ortiz</h5>
    </div>
  );
};

export default Comment;

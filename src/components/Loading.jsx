import { BeatLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="absolute inset-0 bg-secondary flex justify-center items-center z-[99]">
      <BeatLoader color="#fc4a4a" size={15} />
    </div>
  );
};

export default Loading;

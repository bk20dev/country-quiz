import LoadingImage from '../assets/loading.svg';

const Loading = () => (
  <div className="flex flex-col items-center gap-12 bg-white py-16 rounded-3xl">
    <img src={LoadingImage} alt="" className="w-40" />
    <p className="text-2xl font-bold text-navy">Loading</p>
  </div>
);

export default Loading;

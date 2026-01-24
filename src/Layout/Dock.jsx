import { useDispatch } from 'react-redux';
import { opneApp } from '../App/features/osSlice';
import { dockItem } from '../constants';

const Dock = () => {
  const dispatch = useDispatch();

  const handleDockClick = (id, canOpen) => {
    if (canOpen) {
      dispatch(opneApp(id));
    }
  };

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-2 shadow-2xl">
      <div className="flex gap-2 items-end">
        {dockItem.map(({ id, name, icon, canOpen }) => (
          <div
            key={id}
            onClick={() => handleDockClick(id, canOpen)}
            className={`group relative ${canOpen ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            <img
              src={icon}
              alt={name}
              className="w-14 h-14 transition-all duration-300 hover:scale-125 hover:-translate-y-2 active:scale-95 active:translate-y-0"
            />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
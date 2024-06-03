// hooks.js
import { useMyContext } from './context';

const useResolvedPath = () => {
    const context = useMyContext();

    if (!context) {
        throw new Error('useResolvedPath must be used within a MyProvider');
    }

    const { future } = context;
    
    // Rest of your hook logic
};

export default useResolvedPath;

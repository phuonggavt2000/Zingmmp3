/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

function useSetStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export default useSetStorage;

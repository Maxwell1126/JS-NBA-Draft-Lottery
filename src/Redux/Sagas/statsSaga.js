function* getClasses(action) {
    try {
        const response = yield axios.get('/api/stats');
        const stats = { type: 'SET_STATS', payload: response.data }
        yield put(stats);
    } catch (error) {
        console.log('Error getting classes', error);

    }
}
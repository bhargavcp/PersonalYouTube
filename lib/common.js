export const getUrlAndParams = (getState, urlTail, options) => {

    const currentState = getState().configuration.account;
    const url = `${currentState.base_url}/${urlTail}`;
    options['key'] = currentState.key;

    return {
        url: url,
        params: options
    };

};
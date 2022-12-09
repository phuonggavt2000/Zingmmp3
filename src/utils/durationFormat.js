import moment from 'moment';

function durationFormat(num) {
    const time = moment.utc(moment.duration(num, 'seconds').asMilliseconds()).format('mm:ss');
    return time;
}

export default durationFormat;

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HourBlock from './HourBlock';

const mapStateToProps = (state, ownProps) => {
    const events = [{
        studentId: 1,
        teacherId: 1,
        date: "2022-07-23 07:00:00",
        status: {},
        subject: {
            id: 5
        }
    },
    {
        studentId: 1,
        teacherId: 3,
        date: "2022-07-20 10:00:00",
        status: {},
        subject: {
            id: 1
        }
    }, {
        studentId: 1,
        teacherId: 2,
        date: "2022-07-17 07:00:00",
        status: {},
        subject: {
            id: 2
        }
    }, {
        studentId: 1,
        teacherId: 2,
        date: "2022-07-30 09:00:00",
        status: {},
        subject: {
            id: 4
        }
    }];
    return { ...ownProps, events };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ ...ownProps }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HourBlock);
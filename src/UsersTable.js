import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { showModalAction } from './redux/actions'

class Users extends React.Component {
    state = {
        columns: [
            {
                title: 'Ид юзера',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Имя пользователя',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'email',
                dataIndex: 'email',
                key: 'email'
            }
        ],
        data: []
    }

    onClick = (e, record) => {
        this.props.triggerModal(record)
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();

        this.setState(() => {
            return {
                data: users
            }
        });
    }

    render() {
        const {
            columns,
            data
        } = this.state;

        console.log(this.state);

        return <div>
            <Table onRow={(record, rowIndex) => {
                return {
                    onClick: event => { this.onClick(event, record) }
                };
            }}
                rowClassName={(record, rowIndex) => {
                    if(this.props.blockUser.indexOf(rowIndex) !== -1)
                        {return 'blockUser'}
                }}
                columns={columns} dataSource={data} rowKey="id"/>
        </div>
    }
}



const mapStateToProps = state => {
    //console.log(state.modal.blockUserId);
    return {
        blockUser: state.modal.blockUserId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerModal: (record) => {
            let action = showModalAction(record)
            dispatch(action)
        }
    }
}

const ConnectedUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
export default ConnectedUsers

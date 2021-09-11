import React, { Component } from 'react'

export class ComponentA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        this.setState({ data: this.state.data + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        )
    }
}


class Content extends React.Component {

   //thực thi khi khởi chạy ứng dụng
    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }


    //chạy khi có thay đổi dữ liệu
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!')
    }

    //kiểm tra có thay đổi biến trạng thái nào không
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    ///////////////////////////////////////

    //nếu shouldComponentUpdate không trả về true (khi có thay đổi state) thì hai function bên dưới sẽ không chạy
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!')
    }
    ///////////////////////////////////////


    //xảy ra khi tất cả các component đucợ ngắt khỏi DOM
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }
 
export default ComponentA

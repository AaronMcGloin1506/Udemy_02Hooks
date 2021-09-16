import React, { Component } from 'react'

import { MyContext } from '../context';

import UserItem from './userItem'

class User extends Component{

    // have to use contextType as it is a reserved keyword and it has to be static
    // can only use one contextTyper per class 
    //static contextType = MyContext;



    render(){
        //console.log(this.context);
        return(
            <>
                <MyContext.Consumer>
                { context => {
                    console.log(context.users[1].name)
                }} 
                </MyContext.Consumer>
                <UserItem/>
            </>
        )
    }
}
export default User;
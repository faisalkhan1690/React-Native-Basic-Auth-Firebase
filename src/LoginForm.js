import React,{Component} from 'react';
import {Button, Card,CardSection,Input} from './common'

class LoginForm extends Component{
    state={email:'',password:''};
    


    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    lable="Email Id :"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email:email})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    lable="Password :"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password)=>this.setState({password:password})}
                />
                </CardSection>

                <CardSection>
                    <Button>
                        Login 
                    </Button>
                </CardSection>
            </Card>
        )
    };
}""

export default LoginForm;
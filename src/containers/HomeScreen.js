import React from 'react';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {input: ""};

        this.updateText = this.updateText.bind(this);
    }

    updateText(prevProps){
        this.setState({input: prevProps});
    }

    render() {
        const imagesUri = ["https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/38896384_2674333309457446_1052444618777427968_n.jpg?_nc_cat=0&oh=9fe58d61abee326d100ce8d09d0a5e7e&oe=5C015487",
            "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/11988705_1498197423824427_2388727009288618654_n.jpg?_nc_cat=0&oh=d824a3a4181809f39ef561d2fa482411&oe=5BFAF3B6",
            "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/18274890_1359922077435763_8893434779860314708_n.jpg?_nc_cat=0&oh=4406b55d0dbcf4d60efec9429a564e97&oe=5C09566A",
            "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/29133986_2094014444168618_2310728195288155120_n.jpg?_nc_cat=0&oh=c9d2639bf3246f1078a3a31c6f0b502c&oe=5BCB36F8"];

        return (
            <View style={styles.container}>
                <Content >
                    <Text>This is america WOOOOOW something</Text>
                    <Thumbnail large source={{uri: imagesUri[0]}}/>
                    <Thumbnail large source={{uri: imagesUri[1]}}/>
                    <Thumbnail large source={{uri: imagesUri[2]}}/>
                    <Thumbnail large source={{uri: imagesUri[3]}}/>
                    <Image source={{uri: imagesUri[0]}}/>
                    <Image source={{uri: imagesUri[0]}}/>
                    <Image source={{uri: imagesUri[0]}}/>
                    <View style={styles.flex_1}/>
                    <View style={styles.flex_1}/>
                    <View style={styles.flex_1}/>
                    {/*<Text style={styles.flex_test_2}>Open up App.js to start working on your app!</Text>*/}
                    {/*<Text style={styles.flex_test_3}>Changes you make will automatically reload.</Text>*/}
                    {/*<Text style={styles.flex_test_3}>Shake your phone to open the developer menu.</Text>*/}
                    <TextInput style={styles.flex_1} onChange={this.updateText} placeholder="lol nice bro this is like html wow"/>
                    <Button style={styles.flex_1}/>
                    <Icon name="home"/>

                </Content>

                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="mail" />
                    </Button>
                </Fab>

            </View>

        );
    }
}
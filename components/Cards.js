import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="card mb-4 box-shadow" id="Card" >
                <div id="Card-image">
                        <img className="card-img-top" src={this.props.list.image_URL} alt="Card_image" />
                    </div>
                        <div className="card-body">
                            <p className="card-text">{this.props.list.name}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="text-muted">{this.state.hideSkill ? <Description data={this.props.list} name={this.props.list.name}/> : null}</h6>
                            </div>
                        </div>
                
                        <button type="button" className="btn btn-warning" id="button-size" onClick={this.handleChange}>View Details</button>
                    </div>
        )
    }
};

const styles = {
    cardsStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        paddingTop: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"
        },
        textStyle: {
        fontSize: 20
        },
        iconPosition: {
        flex: 1,
        flexDirection: "row",
        alignItems: "right",
        justifyContent: "right",
        marginLeft: "50%"
        }
    };

export default Cards;
import React, { Component } from 'react';
import "tailwindcss/tailwind.css"

class PreferenceCard extends Component {
    render() {
        return (
            <div className="w-1/3 bg-blue-200 p-10 mx-10 text-center rounded-3xl hover:bg-blue-100 shadow-md">
                <h1 className="font-black text-blue-900 text-2xl mb-3">{this.props.preferencetitle}</h1>
                <h3 className="text-blue-500 font-semibold text-lg">{this.props.selection}</h3>
            </div>
        )
    }
}

export default PreferenceCard;
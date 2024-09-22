import React, { Component, StrictMode } from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import { ColorRing } from "react-loader-spinner";

export default class DateRangePickkerSelect extends Component {
  constructor(props, context) {
    super(props, context);


    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    const concernedElement = document.querySelector(".click-outside-datepicker");
    document.addEventListener("mousedown", (e) => {
      // console.log(concernedElement, e.target);
      if (concernedElement.contains(e.target)) {
        console.log("clicked inside");
      } else {
        this.props.changeIsOpenFalse()
        console.log("clicked outside");
      }
    });
  }

  renderSelectionValue = () => {
    return (
      <div className="date-display">
        {this.props.value.start.format("DD/MM/YYYY")}
        {" - "}
        {this.props.value.end.format("DD/MM/YYYY")}
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="relative" onClick={this.props.onToggle}>
          <div className="cursor-pointer" >{this.renderSelectionValue()}</div>
          <div className="absolute bg-white z-10 2xl:left-[50%] lg:left-[50%] md:left-[50%] left-[90%] translate-x-[-50%] top-[100%] shadow-lg click-outside-datepicker">
            {this.props.isOpen && (
              <DateRangePicker
                value={this.props.value}
                onSelect={this.props.onSelect}
                singleDateRange={true}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}                                                             
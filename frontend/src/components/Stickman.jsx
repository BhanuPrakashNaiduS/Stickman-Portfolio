
//style = {{ why double curly braces? }} - because the first set of curly braces indicates that we are embedding JavaScript expression within JSX, 
//        and the second set is for defining an object in JavaScript that contains CSS properties and values.
// position: "absolute" -> allows placing element anywhere on the screen.
// left: x, top: y -> controls the position of the stickman based on the x and y props passed to the component.
// Head -> borderRadius: "50%" creates a circular shape for the head, and backgroundColor: "white" gives it a white color.
// Body -> width: 2 creates a thin vertical line for the body, and height: 40 gives it a length of 40 pixels.
// Arms -> width: 40 creates a horizontal line for the arms, and height: 2 makes it thin. position: "relative" allows us to position it relative to its normal position, 
//         and top: -25 moves it up to align with the head.
// transform: "rotate(...deg)" -> rotates the legs to create a more dynamic pose, with one leg rotated positively and the other negatively for a natural stance.
// Legs -> Similar to arms but with different positioning and rotation to create a more dynamic pose.
// Label -> Displays the label passed as a prop below the stickman.
function Stickman({x,y,label}) {
    return (
        <div style={{position: "absolute", left: x, top: y, color: "white", textAlign: "center"}}>
            {/* Head */}
            <dev style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "white",
                margin: "auto"
            }}
            />

            {/* Body */}
            <dev style={{
                width: 2,
                height: 40,
                backgroundColor: "white",
                margin: "auto"
            }}
            />

            {/* Arms */}
            <dev style={{
                width: 40,
                height: 2,
                backgroundColor: "white",
                position: "relative",
                top: -25
            }}
            />

            {/* Legs */}
            <dev style={{
                width: 30,
                height: 2,
                backgroundColor: "white",
                position: "relative",
                top: 10,
                transform: "rotate(20deg)",
            }}
            />

            <dev style={{
                width: 30,
                height: 2,
                backgroundColor: "white",
                position: "relative",
                top: 8,
                transform: "rotate(-20deg)",
            }}
            />

            {/* Label */}
            <div>{label}</div>
        </div>
    );
}

export default Stickman;

class css {
    rowStyle = (type) => {
        return {
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: type === "currect" ? "#ABEBC6" : type === "incurrect" ? "#F5B7B1" : "#ABB2B9",
            marginLeft: "5px",
            marginRight: "5px",
            // fontSize: "12px"
        }
    }

    col4Style = (type) => {
        return {
            backgroundColor: type === "currect" ? "#ABEBC6" : type === "incurrect" ? "#F5B7B1" : "#ABB2B9",
            color: "white",
            fontWeight: "500",
            marginTop: "0.5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            lineHeight: "10px"
        }
    }

    quizBox = () => {
        return {
            position: "relative",
            top: "0px",
            width: "100%",
            backgroundColor: "#ffffff",
            padding: "50px",
        }
    }

    

    scoreBoard = () => {
        return
    }
}

export default css

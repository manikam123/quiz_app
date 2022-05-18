class quiz_functionality {

    generate_question = (that) => {
        let op = that.state.operators[Math.floor(Math.random() * 4)];
        let question_1 = Math.floor(Math.random() * 10);
        let question_2 = Math.floor(Math.random() * 10);
        let currect_answer = eval(question_1 + op + question_2);

        that.setState({
            operator: op,
            question_1: question_1,
            question_2: question_2,
            currect_answer: currect_answer
        });
    }

    handleChange = (e, that) => {
        that.setState({
            [e.target.name]: e.target.value
        })
    }

    setQuestion = (that, type) => {
        
        let obj = { no: that.state.current_question_number + 1, que: that.state.question_1 + that.state.operator + that.state.question_2, ans: that.state.currect_answer, type: type }
        
        that.setState(prevState => ({
            questions: [...prevState.questions, obj]
        }))
    }

    check_answer = (answer, that, quizId, quizName, updateScore) => {
        if (that.state.answer) {

            if (that.state.current_question_number === that.state.number_of_question) {
                that.setState({ showToast: true })
            } else {

                if (eval(that.state.question_1 + that.state.operator + that.state.question_2) == answer) {
                    that.setState({
                        display: 20,
                        correct_count: that.state.correct_count + 1,
                        current_question_number: that.state.current_question_number + 1,
                        answer: ""
                    });
                    this.setQuestion(that, "correct_ans")

                    let quizObj = {
                        quizId: quizId,
                        quizName: quizName,
                        score: that.state.correct_count + 1
                    }
                    updateScore(quizObj)

                } else {
                    this.setQuestion(that, "worng_ans")
                    that.setState({
                        display: 20,
                        incorrect_count: that.state.incorrect_count + 1,
                        current_question_number: that.state.current_question_number + 1,
                        answer: ""
                    });

                }
                this.generate_question(that);
            }
        }
    }

    reset(that, timerInterval) {
        that.setState({
            display: '20',
            timerValue: '1500'
        });
        clearInterval(timerInterval);
    }
}

export default quiz_functionality
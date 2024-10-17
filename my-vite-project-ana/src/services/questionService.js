const questions = [
    {
      text: "Você gosta de passar tempo comigo?",
      options: ["Sim", "Não!"],
    },
    {
      text: "Quer passar ainda mais?",
      options: ["Sim", "Não!"],
    },
    {
      text: "Então, quer ser minha namorada?",
      options: ["Sim", "Não!"],
    },
  ];
  
  let currentQuestionIndex = 0;
  
  const getFirstQuestion = () => {
    return questions[currentQuestionIndex];
  };
  
  const getNextQuestion = (answer) => {
    if (answer === "Não!") {
      return "move";
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      return questions[currentQuestionIndex];
    }
  
    return null;
  };
  
  export default {
    getFirstQuestion,
    getNextQuestion,
  };
  
import { Collapse } from "antd";

const { Panel } = Collapse;

const QuestionBox = () => {
  const questions = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. If you want, we'll provide you with a free, personalized 30-minute. If you want, we'll provide you with a free, personalized 30-minute. If you want, we'll provide you with a free, personalized 30-minute. If you want, we'll provide you with a free, personalized 30-minute.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time. Just reach out to customer support for assistance.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time without penalties. Please refer to our terms for detailed information.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can customize your invoices to include additional information as needed.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done on a monthly or annual basis, depending on your selected plan. You'll receive automatic invoices at the start of each billing cycle.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email by going to your account settings and updating your email information.",
    },
  ];

  return (
    <div className="mt-14  rounded-lg mx-auto w-2/3">
      <h3 className="text-center text-lg">Frequently Asked Questions:</h3>
      <Collapse className="bg-white border-none lg:w-full w-[300px]">
        {questions.map((item, index) => (
          <Panel header={item.question} key={index}>
            <p>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default QuestionBox;

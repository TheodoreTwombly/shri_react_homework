import { Accordion } from "../Accordion/Accordion";
import { AccordionGroup } from "../Accordion/AccordionGroup";
import { AccordionItem } from "../Accordion/AccordionItem";
import questionsAnswers from "./questionsAnswers.module.css";
import { dataQA } from "./data";

export const QuestionsAnswers = () => {
  return (
    <main>
      <div className={questionsAnswers.wrapper}>
        <div className={questionsAnswers.wrapperBlock}>
          <h2>Вопросы-ответы</h2>
        </div>
        <Accordion>
          {dataQA.map((item) => {
            return (
              <>
                <AccordionGroup title={item.title}>
                  <AccordionItem text={item.text} />
                </AccordionGroup>
              </>
            );
          })}
        </Accordion>
      </div>
    </main>
  );
};

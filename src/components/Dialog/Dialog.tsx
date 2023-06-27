import { FC, useRef } from "react";
import dialog from "./dialog.module.css";
import Close from "../../../public/close.svg";
import useOutsideClick from "@/hooks/useOutsideClick";

interface DialogProps {
  onConfirm: () => void;
  onClose: () => void;
}

export const Dialog: FC<DialogProps> = ({ onConfirm, onClose }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, onClose);
  return (
    <div className={dialog.overlay}>
      <div className={dialog.wrapper} ref={ref}>
        <div className={dialog.header}>
          <h3 className={dialog.title}>Удаление билета</h3>
          <div className={dialog.deleteButton} onClick={onClose}>
            <Close width={12} height={12} />
          </div>
        </div>
        <p className={dialog.text}>Вы уверены, что хотите удалить билет?</p>
        <div className={dialog.buttons}>
          <button
            className={`${dialog.confirm} ${dialog.button}`}
            onClick={onConfirm}
          >
            Да
          </button>
          <button
            className={`${dialog.cancel} ${dialog.button}`}
            onClick={onClose}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

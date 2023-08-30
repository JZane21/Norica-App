import { FieldValues } from "react-hook-form";
import { ModalConfirmation } from "../../modals/ModalConfirmation";
import { ModalLoading } from "../../modals/ModalLoading";
import { ModalMessage } from "../../modals/ModalMessage";
import { ModalPage } from "../../modals/ModalPage";
import { BooleanSetter } from "../../helpers/voidSetter";

interface Props {
  findedError: boolean;
  emailSent: boolean;
  wrongInputData: boolean;
  confirmation: boolean;
  loading: boolean;
  formAlreadySent: boolean;
  setFindedError: BooleanSetter;
  clearData: () => void;
  setEmailSent: BooleanSetter;
  setWrongInputData: BooleanSetter;
  confirmSubmit: (param: FieldValues) => void;
  setConfirmation: BooleanSetter;
  setFormAlreadySent: BooleanSetter;
  dataForm: FieldValues;
}

export const MessagesHireForm = ({
  findedError,
  emailSent,
  wrongInputData,
  confirmation,
  loading,
  formAlreadySent,
  setFindedError,
  clearData,
  setEmailSent,
  setWrongInputData,
  confirmSubmit,
  setConfirmation,
  setFormAlreadySent,
  dataForm,
}: Props) => {
  return (
    <>
      {(findedError ||
        emailSent ||
        wrongInputData ||
        confirmation ||
        loading ||
        formAlreadySent) && (
        <ModalPage>
          {findedError ? (
            <ModalMessage
              action={() => setFindedError(false)}
              title={"Error de envío"}
              message={`Ocurrió un error inesperado, vuelva a intentarlo más tarde`}
            />
          ) : emailSent ? (
            <ModalMessage
              action={() => {
                clearData();
                setEmailSent(false);
              }}
              title={"Solicitud Enviada!"}
              message={"El correo fue enviado exitosamente"}
            />
          ) : wrongInputData ? (
            <ModalMessage
              action={() => setWrongInputData(false)}
              title={"Error en el formulario"}
              message={`Los datos del formulario no se llenaron correctamente`}
            />
          ) : confirmation ? (
            <ModalConfirmation
              actionOne={() => confirmSubmit(dataForm)}
              actionTwo={() => setConfirmation(false)}
              title={"¿Confirmar envío?"}
              message={`Se enviará el formulario para contratar a la empresa.
              Una vez enviado con éxito, no podrá realizar más envíos de
              formularios en este día`}
            />
          ) : loading ? (
            <ModalLoading />
          ) : (
            <ModalMessage
              action={() => setFormAlreadySent(false)}
              title={"Ya realizó un envío"}
              message={"Solo puede enviar un formulario una vez por día"}
            />
          )}
        </ModalPage>
      )}
    </>
  );
};

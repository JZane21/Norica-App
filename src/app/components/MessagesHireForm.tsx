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
    <ModalPage>
      <>
        {findedError || emailSent || wrongInputData || formAlreadySent || confirmation || loading ? (
          <>
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
            ) : formAlreadySent ? (
              <ModalMessage
                action={() => setFormAlreadySent(false)}
                title={"Envío Restringido"}
                message={
                  "Ya has enviado un formulario hoy. Por favor, intenta nuevamente mañana."
                }
              />
            ) : confirmation ? (
              <ModalConfirmation actionOne={() => confirmSubmit(dataForm)
              } actionTwo={() => setConfirmation(false)
              } title={"Confirmacion de Envio"} message={`Se enviara el formulario con los siguientes datos:
              ${dataForm.email}, 
              ${dataForm.name}, 
              ${dataForm.constructionDescription}, 
              ${dataForm.date}, 
              ${dataForm.organizationName}, 
              ${dataForm.contactNumber}`}/> 
            ) : loading ? (
              <ModalLoading/> 
            ) : <></>
            }
          </>
        ) : (
          <></>
        )}
      </>
    </ModalPage>
  );
        };

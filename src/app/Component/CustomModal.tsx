import {
  Modal,
  ModalBody,
  ModalContent,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import moment from "moment";
import React from "react";

const CustomModal = ({
  isOpen,
  onOpenChange,
  event,
}: {
  isOpen: boolean;
  onOpenChange: any;
  event: any;
}) => {
  const flex: string = `flex flex-row my-1 items-center justify-between`;

  return (
    <Modal isOpen={isOpen} onOpenChange={() => onOpenChange(false)}>
      <ModalContent>
        <ModalBody>
          <div className="p-3">
            <div className={flex}>
              <p className="font-regular my-1">Booking Name</p>
              <input
                className="border-1 px-1 border-[#a6a6a6] rounded-md"
                type="text"
                placeholder="Booking name"
              />
            </div>
            <div className={flex}>
              <p className="font-regular">Location</p>
              <p className="font-regular">Indore</p>
            </div>
            <div className={flex}>
              <p className="font-regular">Sport</p>
              <p className="font-regular">Cricket</p>
            </div>
            <div className={flex}>
              <p className="font-regular">Booking Date</p>
              <p className="font-regular">
                {moment(event?.start).format("DD MMMM")}
              </p>
            </div>
            <div className={flex}>
              <p className="font-regular">Booking Duration</p>
              <div className="flex flex-row gap-3">
                <p className="font-regular">
                  {moment(event?.start).format("HH:mm a")}
                </p>
                <p className="font-regular">
                  {moment(event?.end).format("HH:mm a")}
                </p>
              </div>
            </div>
            <div className={flex}>
              <p className="font-regular">Booking Price</p>
              <p className="font-regular">20000</p>
            </div>
            <div className={flex}>
              <p className="font-regular">Booked By</p>
              <Select aria-label="select customer" className="max-w-32">
                {["Ganesh", "Deepak"].map((name: string) => (
                  <SelectItem key={name}>{name}</SelectItem>
                ))}
              </Select>
            </div>
            <div className={`${flex} mt-6`}>
              <button
                onClick={() => onOpenChange(false)}
                className="shadow-btn font-regular px-3 py-1 rounded-md"
              >
                Cancel
              </button>
              <button className="bg-success shadow-btn text-white font-regular px-3 py-1 rounded-md">
                Save
              </button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;

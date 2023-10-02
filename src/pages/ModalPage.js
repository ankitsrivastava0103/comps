import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShowClick = () => {
    setShowModal(true);
  };

  const handleModalCloseClick = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleModalCloseClick} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleModalCloseClick} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis blandit
        ipsum. Morbi a leo sapien. Aliquam vehicula vulputate lacus, ac
        venenatis velit consectetur nec. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        pellentesque sapien nec volutpat bibendum. Nulla ac sem aliquet, viverra
        eros quis, elementum nibh. Integer dignissim tempus odio, in eleifend
        felis tristique vitae. Nulla sed mi eget lectus vestibulum convallis.
        Proin efficitur egestas velit, quis venenatis nulla dapibus congue.
      </p>
      <Button onClick={handleModalShowClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;

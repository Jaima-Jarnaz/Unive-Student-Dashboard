import { MessengerItem } from "components/molecules/messenger-item";
import image from "assets/image/image.png";
import image1 from "assets/image/image1.png";
import image2 from "assets/image/image2.png";
import image3 from "assets/image/image3.png";
import image4 from "assets/image/image4.png";
import user from "assets/image/Users.png";

export const ItemMessenger: React.FC<any> = () => {
  const messageData = [
    {
      modifiers: "active-text",
      name: "Sophie Kowalski",
      messagetext: "Thanks, Mia. Please let me know when I can...",
      timetext: "3  min",
      notification: "1",
      src: image,
    },
    {
      modifiers: "active-text",
      name: "Ex Remedy App Group",
      messagetext: "Jarvis: How about I start compiling all feeback...",
      timetext: "15 min",
      notification: "10",
      src: user,
    },
    {
      modifiers: "normal-text",
      name: "John Kumoz",
      messagetext: "Hey Mia. Do you know where I can find last...",
      timetext: "45  min",
      notification: "1",
      src: image1,
    },
    {
      modifiers: "normal-text",
      name: "Chris Meinfield",
      messagetext: "OK. I’ll have her give you a call and you can figure...",
      timetext: "Yesterday",
      notification: "1",
      src: image2,
    },
    {
      modifiers: "active-text",
      name: "Zoe Acorn",
      messagetext: "Any chance we can do it later this week? I’m out...",
      timetext: "Monday",
      notification: "2",
      src: image3,
    },
    {
      modifiers: "normal-text",
      name: "Johm Kan",
      messagetext: "Sure, no problem. I’ll send it over once we complete...",
      timetext: "Tuesday",
      notification: "2",
      src: image4,
    },
  ];

  return (
    <div className="o-messenger-item">
      <div className="o-messenger-item__content">
        <MessengerItem messageData={messageData} />
      </div>
    </div>
  );
};

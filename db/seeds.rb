# encoding: utf-8
Project.delete_all

Project.create!(name: 'Blindead',
  description: 
    %{
        Owen, he can't stay here forever. Most of his friends have gone. It means so much to him. I'll make it up to him next year. I promise. Luke's just not a farmer, Owen. He has too much of his father in him. That's what I'm afraid of.
      },
  image_url: 'blindead1.jpg')


Project.create!(name: 'Naxos',
  description:
    %{
        Hey...hey, open the pressure maintenance hatch on unit number... where are we? Three-two-six-eight-two-seven. If we can just avoid any more female advice, we ought to be able to get out of here. Well, let's get moving! Where are you going? No, wait. They'll hear! Come here, you big coward! Chewie! Come here! Listen. I don't know who you are, or where you came from, but from now on, you do as I tell you. Okay? Look, Your Worshipfulness, let's get one thing straight! I take orders from one person! Me! It's a wonder you're still alive. Will somebody get this big walking carpet out of my way? No reward is worth this.
      },
  image_url: 'naxos1.jpg')


Project.create!(name: 'CK Tonery',
  description: 
    %{
        There she is. See-Threepio, do you copy? For the moment. Uh, we're in the main hangar across from the ship. We're right above you. Stand by. You came in that thing? You're braver that I thought. Nice! Come on! It's them! Blast them! Get back to the ship! Where are you going? Come back! He certainly has courage. What good will it do us if he gets himself killed? Come on! I think we took a wrong turn. There's no lock! That oughta hold it for a while. Quick, we've got to get across. Find the control that extends the bridge. Oh, I think I just blasted it. They're coming through! Here, hold this. Here they come! For luck!

Run, Luke! Run!
      },
  image_url: 'ck1.jpg')
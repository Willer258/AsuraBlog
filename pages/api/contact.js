import {MongoClient} from 'mongodb'


  async function handler(req, res){

  if (req.method === 'POST'){
      const { email, name, message } = req.body;

      if(
        !email ||
        !email.includes('@')  || 
        !name || 
        name.trim() === '' ||
        !message || 
        message.trim() === '' 
        ) {
        res.status(422).json({message: 'Invalid input'});
        return ;
      }

      //Acces a la base de donnees 
      const newMessage ={
        email:email,
        name:name,
        message:message,
      };
      let client;
      try{
        console.log(newMessage);
         client = await MongoClient.connect('mongodb+srv://Willer:@lain2018@cluster0.pn2go.mongodb.net/my-site?retryWrites=true&w=majority');

      }catch(error){
        res.status(500).json({message: 'could not connect database'})
      }
     const db = client.db();

     try{

       const result = await db.collection('messages').insertOne(newMessage);
       newMessage.id = result.insertedId;
     } catch(error){
      client.close();
      res.status(500).json({message: "Storing message failed"});
      return;
     }
     client.close()
      res.status(201).json({message:'Successfully stored message!', message: newMessage});
  }
}
export default handler;
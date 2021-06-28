import {MongoClient} from 'mongodb';

async function handler(req, res){

  if(req.method === 'POST'){
    const {title , description , content} = req.body;

    if(
      !title ||
      !title.trim()==='' ||
      !description ||
      !description.trim() === '' ||
      !content ||
      !content.trim() === ''

    ) {
      res.status(422).json({message:'Invalid input'});
      return;
    }

    const newPost = {
      id: title,
      date: new Date().toISOString(),
      title:title,
      description:description,
      content:content
    };

    let client;
    try{
      console.log(newPost)
      client = await MongoClient.connect('mongodb + srv://Willer:@lain2018@cluster0.pn2go.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    }catch(error){
      res.status(500).json({message:'could not connect database'})
    }
    const db = client.db();

    try {
      const result = await db.collection('Posts').insertOne(newPost);
      newMessage.id = result.insertedId;
      
    }catch(error){
      client.close();
      res.status(500).json({message:"Storing message failed"});
      return;
    }
    client.close()
    res.status(201).json({ message:'Successfully stored message!' , message:newPost});

  }
}
export default handler;
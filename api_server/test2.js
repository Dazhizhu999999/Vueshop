//爬取数据
// const request = require('request');
// const cheerio = require('cheerio');

// request('http://localhost/home', (error, response, html) => {
//     if(error) return console.log(error)
//   if (!error && response.statusCode == 200) {
//     const $ = cheerio.load(html);
//     const data = $('.data-item').text();
//     console.log(data);
//   }
// });

//视频接口,这安装包要配置系统变量
// const ffmpeg = require('fluent-ffmpeg');

// const cmd = ffmpeg('Gears.mp4')
//   .input('gg.webp')
//   .input('subtitles.srt');

//   cmd.addOption('-vf', '[0:v][1:v]overlay=10:10,scale=1920:1080,subtitles=subtitles.srt[out2]')

//   cmd.output('output2.mp4')
//   .outputOptions(['-map [out2]', '-map 0:a'])
//   .on('end', function() {
//     console.log('Done adding watermark, changing resolution and adding subtitles');
//   })
//   .run();

// const cmd = ffmpeg('Gears.mp4')
//   .input('subtitles.srt');
//   cmd.addOption('-vf', 'subtitles=subtitles.srt[out]');
//   cmd.output('output5.mp4')
//   .outputOptions('-map 0:a')
//   .on('end', function() {
//     console.log('Done adding subtitles');
//   })
//   .run();

const express = require('express');
const multer = require('multer');
const cors =require('cors')
const fs = require('fs');

const app = express();
app.use(cors())

// 配置 multer 中间件，用于解析请求中的文件
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
  // req.file 是 `image` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
  const file = req.file;

  // 移动文件 1 要移动文件的旧路径，2 移动文件的新路径
  fs.rename(file.path, 'public/images/' + file.originalname, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  })
  if(req.file){
   return res.send('上传成功，待审核');
  }
  
});

app.listen(3100,()=>{
  console.log('启动成功')
})
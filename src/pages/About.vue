<template>
  <div class="about">
    <h1>About</h1>
    <el-row :gutter="20">
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <h4>Profile</h4>
          <p>鳥が好きなのに最近アレルギーになった。</p>
          <p>フロントエンドが好き。</p>
          <p>英語のドキュメントが嫌い。</p>
          <br/>
        </div>
      </el-col>
      
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <h4>Tech Skill</h4>

          <p><el-tag>Frontend</el-tag> 
            &nbsp;<el-tag type="warning">Backend</el-tag>
            &nbsp;<el-tag type="info">DB</el-tag>
            &nbsp; <el-tag type="success">OS</el-tag>

          </p>
          <br/>

          <p>
            <el-tag>JavaScript</el-tag> 
            &nbsp; <el-tag>HTML/HTML5</el-tag> 
            &nbsp; <el-tag>CSS/CSS3</el-tag>
          </p>
          <p>
            <el-tag type="warning">Python</el-tag> 
            &nbsp; <el-tag type="warning">Java</el-tag> 
            &nbsp; <el-tag type="warning">C#</el-tag> 
            &nbsp; <el-tag type="warning">ASP.NET</el-tag>
          </p>
          <p>
            <el-tag type="info">MySQL</el-tag> 
            &nbsp; <el-tag type="info">PostgreSQL</el-tag>
            &nbsp; <el-tag type="info">SQL Server</el-tag>
          </p>
          <p>
            <el-tag type="success">Windows</el-tag> 
            &nbsp; <el-tag type="success">AmazonLinux</el-tag>
            &nbsp; <el-tag type="success">Rhel</el-tag>
          </p>
          <br />
        </div>
      </el-col>

      <el-col :span="7">
        <div class="grid-content bg-purple">
          <h4>Qualified</h4>

          <p>
            2012&nbsp;ビジネス文書実務検定&nbsp;1級
          </p>
          <p>
            2012&nbsp;珠算・電卓実務検定&nbsp;2級
          </p>
          <p>
            2013&nbsp;情報処理検定（COBOL）&nbsp;2級
          </p>
          <p>
            2014&nbsp;商業経済検定（2科目）
          </p>
          <p>
            2014&nbsp;秘書検定&nbsp;3級
          </p>
          <br />
        </div>
      </el-col>

    </el-row>


  </div>
</template>

<style>
  .about {
    margin-left: 3em;
    margin-right: 3em;
  }

  p{
    margin-left: 2em;
    font-size: small;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child 
    {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
  </style>

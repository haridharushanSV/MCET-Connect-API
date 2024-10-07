<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>

        </md-button>
        <span class="md-title ">MCET Connect</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">

        <div class="sidebar">
          <div class="sidebar-content position-absolute top-30">
                <md-button v-on:click="outingpage()" class="text-white">OUTING</md-button>
                <md-button v-on:click="outpasspage()" class="text-white">OUTPASS</md-button>
                <md-button  v-on:click="amicleanpage()" class="text-white">AM I CLEAN</md-button>
          </div>
        </div>  
      </md-app-drawer>
      <md-app-content>

<div>
<b-carousel
id="carousel-1"
v-model="slide"
:interval="4000"
controls
indicators
background="#ababab"
img-width="1024"
img-height="380"
style="text-shadow: 1px 1px 2px #333;"
@sliding-start="onSlideStart"
@sliding-end="onSlideEnd"
> 
<!--Text slides with image -->
<b-carousel-slide
  
  img-src="https://drmcet.ac.in/wp-content/uploads/2024/01/slider2.jpg"
></b-carousel-slide>

<!-- Slides with custom text -->
<b-carousel-slide img-src="https://drmcet.ac.in/wp-content/uploads/2024/01/slider1.jpg">
 
</b-carousel-slide>

<!-- Slides with image only -->
<b-carousel-slide img-src="https://drmcet.ac.in/wp-content/uploads/2024/01/slider5.jpg"></b-carousel-slide>

</b-carousel>
</div>

<br>

<b-jumbotron>
<h3><center><b>Welcome to MCET</b></center></h3>
<div height='100px' width='100px'>
<b-card img-src="https://drmcet.ac.in/wp-content/uploads/2023/12/About-Us-Banner-1.png" img-alt="Card image" img-right>
      <b-card-text>
        <p>Dr. Mahalingam College of Engineering and Technology (MCET) is a self – financing educational institution situated in Pollachi, Coimbatore District
MCET is the vision of Arutchelvar Dr. N. Mahalingam, whose determination and dynamism made possible the realization of this institution of excellence. MCET was established in 1998 to commemorate the 75th Birthday of this great visionary Arutchelvar Dr. N. Mahalingam.Dr. Mahalingam College of Engineering and Technology, Pollachi endeavors to impart high quality, competency based technical education in Engineering and Technology to the younger generation with the required skills and abilities to face the challenging needs of the industry around the globe. This institution is also striving hard to attain a unique status in the international level by means of infrastructure, state-of-the-art computer facilities and techniques.</p>
      </b-card-text>
      </b-card>
</div>
</b-jumbotron>
  


<div>
<center>
<b-card bg-variant="dark" text-variant="white" title="FOR FURTHER INFORMATION / CLARIFICATION">
<h4>

<b-card-group deck>

<b-card bg-variant="dark" text-variant="white" class="text-center">
<b-card-text>  
<h2>Department of Information Technology</h2>
The department of Information Technology was established in 1999. The department offers B.Tech. (IT) programme, which combines faculties with expertise in various fields and good laboratory facilities for imparting knowledge to the students. This enables students to face the challenging needs of the industries and research institutions. The department is affiliated to Anna University & B.Tech. Information Technology Programme is accredited by the National Board of Accreditation (NBA), AICTE, New Delhi.

The department conducted several national level workshops, Seminars, FDP, SDP, Conferences, etc. Our Department faculty members have published their research work in Reputed national/international Journals namely IEEE Transaction on Image Processing, IEEE Communications, ACM, Springer, etc. Our faculty members are involved in various research works, such as in the fields of Signal Processing, Image Processing, Networking, Data Mining, Soft Computing, etc.,
</b-card-text>
</b-card>

<b-card bg-variant="dark" text-variant="white" class="text-center">
<b-card-text>  
<h2>DEPARTMENT OF MECHANICAL ENGINEERING</h2>
The Department of Mechanical Engineering existing since the inception of the college in 1998 combines faculty with expertise in various fields and good laboratory facilities. The department boasts of well-qualified and committed faculty ably supported by the technical supporting staff. The students have access to state of the art laboratories and workshops, which enable them to face the challenging needs of the industries and research institutions. The department offers value added courses apart from the regular subjects which enable the students acquire marketable skills. Mechanical Engineering Department offers M.E.(CAD/CAM) course. Also department is recognized by Anna University, Chennai as research Centre to pursue Ph.D. The Programme is accredited by the National Board of Accreditation (NBA).
</b-card-text>
</b-card>


<b-card bg-variant="dark" text-variant="white" class="text-center">
<b-card-text>  
<h2>DEPARTMENT OF CIVIL ENGINEERING</h2>
The department of Civil Engineering has been in existence since 2007 and has grown into a fully-fledged department offering courses leading to B.E degree (4 years) in Civil Engineering and M.E (2 years) in Structural Engineering. The department has well qualified faculty and supporting staff in areas such as Structures, Geotech, Construction & Management, Environmental and Transportation Engineering. The department places special emphasis on engineering automation. The students will be exposed to advanced computing techniques used for analysis and design. In this regard, the department provides opportunities for students to acquire knowledge in the latest software’s such as, STAADPRO, STRUDS, GIS, AUTOCAD, MS Project and ANSYS. Expertise gained in these automation tools will enhance the competitive edge of our graduates in the ever-tighter job market. The department undertakes industrial consultancy works as a part of its interaction with industry and also organizes seminars/symposia for professional interaction. The department contributes to the interdisciplinary academic and research activity of the Institute.
</b-card-text>
</b-card>



</b-card-group>
</h4>
</b-card>
</center>
</div>

</md-app-content>
</md-app>



</div>

</template>

<style>
  .md-app {
    min-height: 2250px;
    border: 1px solid rgba(#000, .12);
    background-color: rgb(218, 142, 66);
  }
  .md-drawer {
    width: 250px;
    max-width: calc(100vw - 125px);
  }
  .md-button {
  
    color:#000;
  }
  .sidebar {
    color: #000;
  width: 100%;
  height: 100%; /* Adjust height as needed */
  /* background-image: url('https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716076800&semt=ais_user'); Set background image */
  background-size: cover; /* Adjust to cover the sidebar */
  background-repeat: no-repeat;
  background-color: rgb(218, 142, 66);
}
  .sidebar-content {
    padding: 20px;
  }
</style>

<script>
  export default {
    name: 'PersistentMini',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      outingpage(){
        this.$router.push('/outing')
      },
      outpasspage(){
        this.$router.push('/outpass')
      },
      amicleanpage(){
        this.$router.push('/amiclean')
      }
    }
  }
</script>


<style scoped>
header h2 {
  position:relative;
  top:20px;
  font-size: 50px;
  font-weight: 600;
  background-image: linear-gradient(orange);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.grey{
  position:relative;
  top:30px;
}
  .page-container {
    min-height: 1500px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }
  .md-card{
    width:500px;
    height:250px;
    
  }

  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
  .{
    height:30px;
    width:40px;
  }
</style>

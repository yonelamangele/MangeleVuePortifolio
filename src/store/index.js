import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe: null,
    resume: null,
    projects: null,
    testimonials: null,
    contacts: null

  },
  mutations: {
    setAboutMe(state, code) {
      state.aboutMe = code
    },
    setResume(state, code) {
      state.resume = code
    },
    setProjects(state, code) {
      state.projects = code
    },
    setTestimonials(state, code) {
      state.testimonials = code
    },
    setContacts(state, code) {
      state.contacts = code
    },
  },
  actions: {
    async getAboutMe(content){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/json-pics/data.json')
      let about = await fetchedInfo.json();
      let {aboutMe} = about
      content.commit('setAboutMe', aboutMe[0].para)
    },
    
      async getResume(content){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/json-pics/data.json')
      let about = await fetchedInfo.json();
      let {resume} = about
      content.commit('setResume', resume)
      },
    
      async getProjects(content){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/json-pics/data.json')
      let pro = await fetchedInfo.json();
      let {projects} = pro
      content.commit('setProjects', projects)
      },
      // async getProjects(content){
      // let fetchedInfo = await fetch('https://yonelamangele.github.io/json-thingy/data.json')
      // let pro = await fetchedInfo.json();
      // let {projects} = pro
      // content.commit('setProjects', projects[1].name)
      // },
    
      async getTestimonials(content){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/json-pics/data.json')
      let about = await fetchedInfo.json();
      let {testimonials} = about
      content.commit('setTestimonials', testimonials)
      },
    
      async getContacts(content){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/json-pics/data.json')
      let about = await fetchedInfo.json();
      let {contacts} = about
      content.commit('setContacts', contacts)
      }
  },
  modules: {
  },
  getters: {
  }
})




// let {aboutMe, resume, projects, testimonials, contacts} = data

// console.log(data)
// commit('setAboutMe', aboutMe)
// commit('setResume', resume)
// commit('setProjects', projects)
// commit('setTestimonials', testimonials)
// commit('setContacts', contacts)
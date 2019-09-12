import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  companies: [
    {
      id: "microsoft",
      title: "Microsoft",
      location: "Redmond, WA USA",
      logo: "/assets/images/microsoft.png",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deserunt laboriosam, nostrum maiores fuga iure voluptatibus quibusdam reprehenderit cupiditate ad doloribus dolorum illum tempora illo magni explicabo aut soluta ducimus modi culpa quisquam obcaecati natus a. Nemo accusamus recusandae hic dignissimos numquam! Explicabo culpa id nisi ducimus laudantium doloribus voluptates maiores esse consequuntur sapiente, debitis harum odio quas ex ab iste ullam tempore veniam fuga. Sed ullam cumque, non tenetur sit delectus harum autem officia et numquam accusamus neque assumenda in? Exercitationem cum iusto minima! Ex dicta itaque nam ullam atque! Ad consequatur placeat cupiditate dolorem eius iusto atque qui?",
      activities: [
        {
          date: "2019-09-03",
        },
      ],
    },
  ],
};

export default new Vuex.Store({
  state,
});

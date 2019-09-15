import { shallowMount } from "@vue/test-utils";
import CompanyActivities from "../../src/components/CompanyActivities";

const mockCompany = {
  id: "microsoft",
  title: "Microsoft",
  location: "Redmond, WA USA",
  logo: "/assets/images/microsoft.png",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deserunt laboriosam, nostrum maiores fuga iure voluptatibus quibusdam reprehenderit cupiditate ad doloribus dolorum illum tempora illo magni explicabo aut soluta ducimus modi culpa quisquam obcaecati natus a. Nemo accusamus recusandae hic dignissimos numquam! Explicabo culpa id nisi ducimus laudantium doloribus voluptates maiores esse consequuntur sapiente, debitis harum odio quas ex ab iste ullam tempore veniam fuga. Sed ullam cumque, non tenetur sit delectus harum autem officia et numquam accusamus neque assumenda in? Exercitationem cum iusto minima! Ex dicta itaque nam ullam atque! Ad consequatur placeat cupiditate dolorem eius iusto atque qui?",
  activities: [
    {
      id: 1,
      date: "2019-09-03",
      image: "assets/images/performance-monitoring@2x.png",
      companyName: "Kaiser Permanente",
    },
    {
      id: 2,
      date: "2019-09-01",
      image: "assets/images/group-copy-2@2x.png",
      companyName: "Google Cloud",
    },
    {
      id: 3,
      date: "2019-09-01",
      image: "assets/images/group-copy-2@2x.png",
      companyName: "Google Cloud",
    },
    {
      id: 4,
      date: "2019-09-01",
      image: "assets/images/group-copy-2@2x.png",
      companyName: "Google Cloud",
    },
    {
      id: 5,
      date: "2019-09-01",
      image: "assets/images/group-copy-2@2x.png",
      companyName: "Google Cloud",
    },
  ],
};

describe("CompanyActivities", () => {
  const wrapper = shallowMount(CompanyActivities, {
    propsData: {
      company: mockCompany,
    },
  });
  it("renders a list of activities with class `activity`", () => {
    expect(wrapper.findAll(".activity").length).toEqual(
      mockCompany.activities.length,
    );
  });
});

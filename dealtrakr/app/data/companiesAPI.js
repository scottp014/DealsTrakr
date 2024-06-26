export const companiesAPI = {
  companies: [
    {
      id: "1",
      name: "Netflix",
      companyOwner: "Greg Peters",
      phoneNumber: "555-555-5555",
      city: "Los Gatos",
      state: "CA",
      dateCreated: "4/14/2024",
      imageURL:
        "data:image/png;base64,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",
      deals: [],
    },
    {
      id: "2",
      name: "Hulu",
      companyOwner: "Joe Earley",
      phoneNumber: "555-555-5555",
      city: "Los Angeles",
      state: "CA",
      dateCreated: "4/10/2024",
      imageURL:
        "data:image/png;base64,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",
      deals: [],
    },
    {
      id: "3",
      name: "ESPN",
      companyOwner: "Scott Rasmussen",
      phoneNumber: "555-555-5555",
      city: "Bristol",
      state: "CT",
      dateCreated: "4/8/2024",
      imageURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAolBMVEX///8AAADsHCT+9fXuSUnxcnTxc3fsABHsFh/rAAzsEhzrAAbsHBzsLTP4vb33tLbl5eUWFhZcXFzMzMzs7OwdHR0iIiJmZmbe3t4KCgrW1tYwMDCCgoIpKSlxcXH4+PiVlZWioqI4ODjDw8OwsLBBQUGMjIz2ra5PT0+5ubn5ycr0lZfwZmn60dL96+v73t7uVFPtNz3yhIPvXF/0np7zjY61S9kVAAAIgUlEQVR4nN2daVvyOhCGU1FBeZFu0palG6AgCuLy///aaQEV2rRJJp02Pc93Ze4raWYmmWSIJivPc6yAyMryPU/aFCL59xNzIU9yULAwJ03CeKupVQ3JUdZ0JTU8EjCeE7lVoqTSI8doAsZf2FWjpLIXfu0w/lrHQDngrKE4MBhzjTIqfzhmbTAznAl2iQNZ2QAwT+goB5ywBpgY7VvJ4cTIMMaiLpRUC8FlWgjm0a9tWI7S/REWzDKqKHLhV7BYosB4/rhulFRjn3+uccMYUS2LWF529Fg1TDyvfYr9yuKdapwwTs1f/qV0p0qYevxksTg9KBdM/atYVsGiIhhj3jRKKotjGWDDLCtNJuHiWAaYMKtGvAtNY2ZewIIxlWFJaFiLGgPGqTzLl5HLoCmHada95MVwOKUwK8VYEodT+t2UwayUmmNH6SsYTKwgS/LdlKzQxTAjhdaxc41n4jCPivjKvMaF2WcRTL3JvpjWRZFNAYzRfGxZoqgg+aTDeNOGY/5yBVP6YQEdxlTOwVxKp7sbKsyjogvZn+hLGhVm3bStbM15YaZNW8qjJz4Yr2k7+USZaBQYJaOYvFwemKhpK3mV3+PIwZhKe5hz2bnkJgszUjYkyyu3PmdhQpXDmIyCqBzGbMnXf1Q2i76EGSkcK9O0npXA+C2aZKkCvxgmVmIjVkRWXAjjQ/7f7vofjvovHL8+LYJZgr7+l8H9FYr6HY5f15cFMLAA8/mqhwTD9fNPdJgJzPdvkFh6fDDnpQ9nME8gFnLbxYHpXvP9fkiFAQZlr0gw/Vu+37c9Cgw0JfvEgvniNOCJAgMcmO071mL2wGmBnYcB+ZhEb9dYMG+8Jvg5GOiGzMO+STdzkJuFMaFR2fMAy81wwwROBgYclW2QBuZ+zw3zu+90goHX9330cWC6r/wwPzHNCQaeYH7c4cD0P/hNCsJzGA+c+W9vsNzMs4AVlnEGAz9V3qH5TF43k+qUPx9h4HtleG5mJ2JG9Aczg2eYeG5GCMaa/MJI1C5gZTP3g62IGbr/CxOCWcgX1sr8LgRzTARSmJnEecwGCaZ/y+9mUh3uDqQwEjt/HSyf2d+IwbjmCUbicGl7g+UzRdxMqukRxpA4xFDDzaRKj9OJ3NafAtnMSWnVI5E7kXlBSgB6V6IwgXmAgeaYqYZ9JO2FfGYqP4UxQgmYl9cbHG3E3Aw5fDREysuQoIMlYVPmswSmvntXuLLjBGbVtBVVaZXAOE0bUZX8BCZs2IbKFGrEa0HVD5/WHjFadb5cJtcgRsvOZIsVJDBN21CdRmTZtAnVaUlkVubO5uYWRa+iCcBBDpEJM3f7fhdDd8Kp2UFTAjzJPMIgpZm9AWhkQiJTK7dD2gC4vxbNZg5aEBmf+YK1z/QpnM2kmhOZcplntOMM4WwmlUUkKv8630gwdx/i6UyiMZEoLu/cYm2afYPscYlEaNZ5xyrO2IDs0YlEnrlF2jTvXYHcjCQM1sq8B7kZYsvAKOZm5GAesGDeQW5GDgbtbEbg1PxcusxqhlYCcAOzR5fxM59IcWaXs9IsK1cmArhCOgHowXxmMi4SsRnSLIO6mWRc4AXzHSyYAU9BM0VziXwGzc3sYW4mGRd4pjlE85mgBCDNNOF7AOxT8x5IvDXAOU2JCYZhJwADmF6BBjkkBsOwqma6rw8wAb9/spTY0WQNTJe3MLkqjST2mhkwYHcBVbrXDI1nWNkMNCsByzXg5zNvLBhgVgLW2iNaCPxblpsBbn7BFUqcabL2maBZCVjpmSb0TIN11eQOGMiDtUzrAIDpGdPNfFRrK0v2UqJCg7nPBNv8AutQoeGFoL9lbZr1BsNqjWUpNOBVTbt/5ePSG3wPQXoGrhu+RL3ZAwMmcTR3IPFfNbmQbUpUAn4hbQBwXs/MKb0YnMB4oGTzA+vezBUM5lSjCaue/USC6X7CYKYydc1olwCBZzM/dc2QJw06aGWzsMTh8MwB9C7ADu12BizPDGVuabyhXQIEbc0cbwMdYEbii/MDGgyEJY1l/m42CefOXzgovBfnszq72QR4nA3LzcA2zS7unGnCZwFolwBBWZDlSd3TRHsFAJI4/DwNdIKZCM6zLdpVE0jikLlBK/py3g4tAIBs6WTuNmsrsXn2guYzAW4mMDMwgu8BDLHuzUBgxloWRizfxMpmRC7O/yr/UoMmtARgFWdBNtt0LQ8jlNWg3WgEVJrRXjcRed6kc4t1o1H8GCQwaDACQ7NF85niJwdnjzWdwcz4v5o3NDcjvNluT6gwAkOD52aEYQpe0dIm3OHm8L57j6HuQBTGjQtg+H3NcH+NoxtRn1n48pw2ad0tp3nxm4Ca35q3Wo8qe62xde9oLsre0VSy40Sx3MxT5//nt2c1o02vAmebHbT5vebce/otfkk7O8mob5wr3xTgqHHecgrMqBVrQMD3+nw7+gJMKYZTOza0wHVS2+vRe2kovz5b/L00lA8ERLqcqB5xBrQPphhGC5s2uEQ/7xlyw6i8CBT21ixuDaZsojan9zgqhVG1EQV9IWPAaLGScc0Y1IFOpb6gf3KBvQFVdDelfQ4Z/TRV6xPC6A7K6HSqUtdWdt/WVvWgZXXUZXcHVmaFtkq/Fy4YbaJI65PLhiZAGEVigTWHoW3pdR7x2MnZhb7hp/Z0WvM8KIzmNLqoMVtpi8Fo8bqxqRas2S3bxWA0I2xoqtlhUctZOIzmOY14HMspTF8kYBKPU/+qFkQTtl0gGM2ruzetbvIPiyiMVvNGR2GyXxFMkn/WNNcClx2/yMJo2lSvASfg9JOyMNosQv90dKEPXwYmyXIWqDj6gpW5VAmTxDd4OHok4FoqgUmWaZzJBkeRgElwVk+V73e4oVnQYR4ZJsGJ/UpDHMuPwaMiDZPyLMOKTj/saClFkug/axnZ7rDBJHIAAAAASUVORK5CYII=",
      deals: [],
    },
    {
      id: "4",
      name: "HBO",
      companyOwner: "David Zaslav",
      phoneNumber: "555-555-5555",
      city: "New York",
      state: "NY",
      dateCreated: "4/4/2024",
      imageURL:
        "data:image/jpeg;base64,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",
      deals: [],
    },
  ],
  getAll: function () {
    return this.companies;
  },
  getById: function (id) {
    const isCompany = (c) => c.id === id;
    return this.companies.find(isCompany);
  },
  //       id: "4",
  // name: "HBO",
  // companyOwner: "David Zaslav",
  // phoneNumber: "555-555-5555",
  // city: "New York",
  // state: "NY",
  // dateCreated: "4/4/2024",
  // imageURL:
  addCompany: function ({
    id,
    name,
    companyOwner,
    phoneNumber,
    city,
    state,
    dateCreated,
    imageURL,
  }) {
    this.companies.push({
      id,
      name,
      companyOwner,
      phoneNumber,
      city,
      state,
      dateCreated,
      imageURL,
    });
  },
  deleteCompany: function (id) {
    const companyToDelete = (c) => c.id === id;
    const companyIndex = this.companies.findIndex(companyToDelete);
    return this.companies.splice(companyIndex, 1);
  },
};

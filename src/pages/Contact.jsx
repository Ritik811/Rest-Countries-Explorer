export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder="Enter Name"
            className="form-control"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Email"
            className="form-control"
          />
          <textarea
            name="description"
            rows={10}
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

const Questions = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-600">
          See if we have already answered your questions.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Do we provide police support for any unwanted situation?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              No. we don't but we do can manage lawyers for you.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Do we take any international currency other than US$ Dollars?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">No.</p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Do we refund your money if you don't find our services well enough
              for you?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Yes with given proper description.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Questions;

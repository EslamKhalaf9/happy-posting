import React from 'react';

function PostDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="post mt-4 p-4 md:w-2/3 mx-auto">
      <h1 className="title text-5xl text-blue-800">React Tutorial {id}</h1>
      <div className="autor text-blue-500 text-2xl">Eslam Khalaf</div>
      <div className="date text-blue-800 text-2xl">2/5/2020, 13:52</div>
      <p className="body text-3xl my-4 font-semibold leading-relaxed text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        provident ducimus, accusantium maiores itaque quasi necessitatibus ex
        ipsam laboriosam possimus excepturi quo quos deserunt officia hic nam
        minima doloribus eveniet aliquam amet molestias. Accusantium,
        repudiandae deserunt? Quaerat, recusandae consequuntur, natus, delectus
        doloremque quae labore ipsum eaque aperiam ut totam dolorum. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Accusamus officiis quia
        ratione! Ut in odit illum eos, exercitationem cupiditate itaque eaque!
        Quam est provident cum possimus magnam corrupti, laboriosam, modi nemo
        vitae suscipit vero autem impedit minus voluptatum veritatis ex nam
        molestias perspiciatis debitis porro labore doloremque ab blanditiis!
        Quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae praesentium eius reprehenderit impedit in neque nemo porro
        facilis quibusdam odio numquam voluptas voluptate, consequuntur, illum
        obcaecati id sunt inventore? Quaerat beatae nisi earum. Voluptatibus eos
        quasi est ipsum dolorem eveniet odio dolorum tempore cum veniam,
        sapiente quidem, asperiores error? Atque, quos aliquid illo inventore
        est cum quisquam dolore omnis iste ipsa vitae beatae! Rerum quos
        accusantium sit vero laborum dolorum voluptate vitae voluptatem. Eos eum
        perspiciatis repudiandae? Inventore suscipit libero at porro recusandae
        pariatur. Ex cupiditate debitis officia mollitia, consectetur facere
        deserunt earum similique rerum totam autem doloremque expedita magnam.
      </p>
    </div>
  );
}

export default PostDetails;

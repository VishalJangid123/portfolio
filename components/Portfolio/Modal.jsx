import ImageGallery from "./ImageGallery";

export default function Modal({ closeModal, data }) {

    return (
      <div className="portfolio__modal">
        <div className="portfolio__modal-content">
        <div className="modal__header">
          <i className="uil uil-times portfolio__modal-close" onClick={() => closeModal()}> </i>
              <h3 className="portfolio__modal-title">
              {data.title}
              </h3>

        </div>
            
          <div className="modal__body">
            <div className="portfolio__modal-date">
              <span className="modal-date">{data.date}</span>
            </div>
            <div className="portfolio__techlabel">
               { data.tags && data.tags.map((tag, index) => {
              return (  <span className="techLabel" key={index}>{tag}</span> )

               })
               }
            </div>
            {/* <p className="portfolio__modal-desc">
                {data.desc}
            </p> */}
            
            <ImageGallery galleryImages={data.images} />
          <div className="portfolio__modal-details" dangerouslySetInnerHTML={{__html: data.details}}>
          </div>

            
          </div>
          <div className="modal__footer">
          {  
            data.links && data.links.map((d, index) => {
              return(
              <a href={d.link} key={index}> <i className={"uil uil-" + d.iconName}></i></a>
              )
            })
          }
          </div>
          <p className="modal__footer__btmlink">Links for more info</p>
        </div>
      </div>
    );
  }
import { useState, useEffect } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from "react-final-form";

import {
  addEpisodeData,
  loadEpisodeData,
  saveEpisode,
} from './EpisodeData.slice';




export default function EpisodeData({userId = 1}) {
    const data = useSelector(state => state.episodeData);
    console.log({data})
    const { episodeData } = data;
    const [name, setName] = useState(episodeData.name);
    const [air_date, setAirDate] = useState(null);
    const [episodeNum, setEpisode] = useState(null);
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadEpisodeData(userId));
    }, [userId]);

    const next = () => {
        console.log({
          name,
          air_date,
          episodeNum,
        })
        if(name && air_date && episodeNum) {
            dispatch(addEpisodeData({
              name,
              air_date,
              episodeNum,
            }));
          } else {
            setMessage("Debe completar todos los camposfdghfjghgfgd")
          }
        };
        const onSubmit = (values) => {
            window.alert(JSON.stringify(values, undefined, 2));
            setName(values.name);
            setAirDate(values.air_date);
            setEpisode(values.episodeNum);
        
            dispatch(saveEpisode(values));
            return {
              name: "Todo mal con tu nombre!",
            }
          };
          if(data.status === 'loading') {
            return <span>loading...</span>
          }
          return <section>
            {message && <span style={{color: 'red'}}>{message}</span>}
            <Form
              onSubmit={onSubmit}
              initialValues={{}}
              validate={(values) => {
                const errors = {};
                if(!values.name) {
                  errors.name = "Este campo es requerido";
                }
                if(!values.air_date) {
                  errors.air_date = "Required";
                }
                if(!values.episodeNum) {
                  errors.episodeNum = "Required";
                }
                return errors;
              }}
              render={({ handleSubmit, form, submitting, values, submitError }) => (

                    <form onSubmit={handleSubmit} >
                      {submitError && <div style={{color: 'red'}}>{submitError}</div>}
                      <div>
                        <Field name="name" component="input">
                          {({ input, meta }) => (
                            <div>
                              <label>name</label>
                              <input {...input} type="text" placeholder="nombre..." />
                              {meta.error && meta.touched && <span style={{color: "red"}}>{meta.error}</span>}
                              {meta.submitError && <span style={{color: "red"}}>{meta.submitError}</span>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div>
                        <Field name="air_date" component="input">
                          {({ input, meta }) => (
                            <div>
                              <label>Lanzamiento</label>
                              <input {...input} type="text" placeholder="Fecha Lanzamiento" />
                              {meta.error && meta.touched && <span style={{color: "red"}}>{meta.error}</span>}
                              {meta.submitError && <span style={{color: "red"}}>{meta.submitError}</span>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div>
                        <Field name="episodeNum" component="input">
                          {({ input, meta }) => (
                            <div>
                              <label>Episodio:</label>
                              <input {...input} type="text" placeholder="Episodio.." />
                              {meta.error && meta.touched && <span style={{color: "red"}}>{meta.error}</span>}
                              {meta.submitError && <span style={{color: "red"}}>{meta.submitError}</span>}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting}
                          >
                            Reset
                        </button>
                        <button type="submit" disabled={submitting} onClick={next}>
                          Submit
                        </button>
                        
                      </div>
                      {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
                    </form>
                    )} />
                      
                    </section>}

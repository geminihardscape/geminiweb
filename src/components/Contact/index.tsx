import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FormBlock } from '@/blocks/Form/Component'

const Contact = async () => {
  const payload = await getPayload({ config: configPromise })

  const forms = await payload.find({
    collection: 'forms',
    where: { title: { equals: 'Contact Form' } },
    limit: 1,
  })

  const form = forms.docs[0]
  return (
    <div className="flex flex-col items-center">
      <div className="container flex flex-col gap-8 items-center p-8">
        <h2 className="font-black text-5xl text-white">
          get <span className="text-tertiary">in touch</span>
        </h2>
        <hr className="h-0.5 w-24 bg-tertiary border-0" />

        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-8 text-muted">
            <section className="flex flex-col gap-4">
              <p className="text-tertiary font-sm">Give us a Call</p>
              <a href="tel:+13134245023">+1 (313) 424-50-23</a>
              <a href="mailto:info@geminihardscape.com">info@geminihardscape.com</a>
            </section>
            <section className="flex flex-col gap-4">
              <p className="text-tertiary font-sm">Find us at the office:</p>
              <p>Adress:</p>
              <p>
                30433 Cousino Drive <br />
                Warren Michigan 48092
              </p>
            </section>
          </div>
          <div>
            {form && (
              // @ts-expect-error Payload's generated Form type is more permissive
              // (nullable/optional) than @payloadcms/plugin-form-builder's hand-written type
              <FormBlock form={form} enableIntro={false} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

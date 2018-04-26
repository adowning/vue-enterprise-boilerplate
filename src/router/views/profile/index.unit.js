import Profile from './index'

describe('@views/profile', () => {
  it('is a valid view', () => {
    expect(Profile).toBeAViewComponentUsing({ user: { name: '' } })
  })

  it(`includes the provided user's name`, () => {
    const { element } = mountShallowView(Profile, {
      propsData: {
        user: { name: 'My Name' },
      },
    })

    expect(element.textContent).toMatch(/My Name\s+Profile/)
  })
})

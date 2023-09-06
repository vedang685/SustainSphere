<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-8">
                  <Button className="justify-self-center" size="small">
                      Primary
                  </Button>
                  <Button className="justify-self-center" size="default">
                      Primary
                  </Button>
                  <Button className="justify-self-center" size="default" disabled>
                      Primary
                  </Button>
                  <Button
                      className="justify-self-center"
                      size="default"
                      loading={loading}
                      onClick={() => setLoading(!loading)}
                  >
                      Primary
                  </Button>
                  <Button className="justify-self-center" size="large">
                      Primary
                  </Button>
                  {/* Secondary */}
                  <Button
                      className="justify-self-center"
                      variant="secondary"
                      size="small"
                  >
                      Secondary
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="secondary"
                      size="default"
                  >
                      Secondary
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="secondary"
                      size="default"
                      disabled
                  >
                      Secondary
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="secondary"
                      size="default"
                      loading={loading}
                      onClick={() => setLoading(!loading)}
                  >
                      Secondary
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="secondary"
                      size="large"
                  >
                      Secondary
                  </Button>
                  {/* Destructive */}
                  <Button
                      className="justify-self-center"
                      variant="destructive"
                      size="small"
                  >
                      Destructive
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="destructive"
                      size="default"
                  >
                      Destructive
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="destructive"
                      size="default"
                      disabled
                  >
                      Destructive
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="destructive"
                      size="default"
                      loading={loading}
                      onClick={() => setLoading(!loading)}
                  >
                      Destructive
                  </Button>
                  <Button
                      className="justify-self-center"
                      variant="destructive"
                      size="large"
                  >
                      Destructive
                  </Button>
              </div>
